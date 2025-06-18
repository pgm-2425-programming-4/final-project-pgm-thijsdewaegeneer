import { useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../api/tasks/CreateTask";
import { fetchProjectByDocumentId } from "../api/projects/fetchProjectByDocumentId";
import AddTaskModal from "./AddTaskModal";
import { fetchBacklog } from "../api/categories/FetchBacklog";

function Searcher() {
    const { projectId } = useParams({ queryKey: ['statuses'], queryFn: fetchBacklog, } )
  const queryClient = useQueryClient();


  const { data: project, isPending, isError } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => fetchProjectByDocumentId(projectId),
    enabled: !!projectId,
  });

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statusType, setStatusType] = useState("To Do");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddTask = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
    setStatusType("To Do");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {

      const projectObj = await fetchProjectByDocumentId(projectId);
      const projectNumericId = projectObj?.id;
      if (!projectNumericId) throw new Error("Project not found");

      await createTask({
        Title: title,
        Description: [
          {
            type: "paragraph",
            children: [{ type: "text", text: description }],
          },
        ],
        project: projectNumericId,
        Task: {
          StatusType: statusType,
        },
      });


      queryClient.invalidateQueries(['tasks', projectId]);
      handleClose();
    } catch (err) {
      setError(err.message || "Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="searcher">
      <form action="submit" method="post" className="searcher__input">
        <input type="text" name="query" placeholder="Search by description" />
      </form>

      <h2 className="searcher__active-project">
        Active project:{" "}
        {isPending
          ? "Loading..."
          : isError
          ? "Error"
          : project?.Title || "Unknown"}
      </h2>

      <div className="searcher__buttons">
        <button
          type="button"
          className="searcher__button searcher__button--left"
          onClick={handleAddTask}
        >
          Add new task
        </button>
        <button className="searcher__button searcher__button--right">
          <Link
            to={`/projects/${projectId}/backlog`}
            className="searcher__button-link"
          >
            View backlog
          </Link>
        </button>
      </div>

      <AddTaskModal
        show={showModal}
        onClose={handleClose}
        onSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        statusType={statusType}
        setStatusType={setStatusType}
        loading={loading}
        error={error}
      />
    </section>
  );
}

export default Searcher;