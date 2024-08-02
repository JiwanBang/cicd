const Comp = () => {
  return (
    <div
      className={[
        "border-black-[3px]",
        "w-[500px]",
        "h-[300px]",
        "flex",
        "items-center",
        "justify-center",
        "gap-3",
        "color-blue",
      ].join(" ")}
    >
      <div>메뉴</div>
      <div>중식</div>
      <div>일식</div>
      <div>양식</div>
      <div>피자돈가스</div>
    </div>
  );
};

export default Comp;
