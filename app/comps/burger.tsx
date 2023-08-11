"use client";

export default function Burger({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  console.log(open);
  return (
    <div className="burger">
      <input
        type="checkbox"
        id="menu_checkbox"
        checked={open}
        onClick={onClick}
      />
      <label htmlFor="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
}
