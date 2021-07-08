type LeftType = {
  id: number;
  left: string;
}

type RightType = {
  id: number,
  right: string;
}

type IntersectionType = LeftType & RightType;

const intrsecType: IntersectionType = {
  id: 123,
  left: "left side",
  right: "right side"
};

console.log(intrsecType);
