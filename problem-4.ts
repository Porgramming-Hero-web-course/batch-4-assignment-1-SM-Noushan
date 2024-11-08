{
  interface Circle {
    radius: number;
  }
  interface Rectangle {
    width: number;
    height: number;
  }
  type ShapeArea = (Circle | Rectangle) & { shape: string };

  const calculateShapeArea = (props: ShapeArea): number => {
    const { shape } = props;
    if (shape.toLowerCase() === "circle") {
      const { radius } = props as Circle;
      return parseFloat((Math.PI * radius ** 2).toFixed(2));
    }
    if (shape.toLowerCase() === "rectangle") {
      const { width, height } = props as Rectangle;
      return parseFloat((width * height).toFixed(2));
    }
    return -1;
  };

  //   console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
  //   console.log(
  //     calculateShapeArea({
  //       shape: "rectangle",
  //       width: 4,
  //       height: 6,
  //     })
  //   );
}
