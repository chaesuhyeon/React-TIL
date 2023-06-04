import Image from "next/image";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {상품.map((item, i) => (
        <div className="food" key={i}>
          {/* 최적화 하려면 위에 import문에 있는 Image 사용 */}
          <img src={`/food${i}.png`} className="food-img" />
          <h4>{item} $40</h4>
        </div>
      ))}
    </div>
  );
}
