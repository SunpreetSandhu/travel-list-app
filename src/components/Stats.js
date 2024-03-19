export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding items to your list!</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Everything! You Are Ready To Go!"
          : `You have ${numItems} items on your list, you have currently packed ${numPacked} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
