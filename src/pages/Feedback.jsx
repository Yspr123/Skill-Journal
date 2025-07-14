import FeedbackForm from "../components/Feedbackform";

function Feedback() {
  return (
    <div className="flex flex-1 items-center justify-center py-10 bg-transparent">
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default Feedback;
