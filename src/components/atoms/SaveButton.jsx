export default function BackButton({ onClickEvent }) {
  return (
    <button
      type="button"
      className="rounded-full p-1 bg-slate-200 hover:bg-slate-300"
      onClick={onClickEvent}
    >
      저장
    </button>
  );
}
