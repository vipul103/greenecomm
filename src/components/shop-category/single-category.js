import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCategory = ({ item }) => {
const getCategoryLink = (category) => {
  const normalized = category.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.includes("hotwater")) return "/hotwater";
  if (
    normalized.includes("ac") ||
    normalized.includes("airconditioning") ||
    normalized.includes("airconditioner")
  ) return "/ac";
  if (
    normalized.includes("solarpanel") ||
    normalized.includes("solarbattery") ||
    normalized.includes("battery") ||
    normalized.includes("growatt")
  ) return "/solar-panel";

  return "#";
};



  const link = getCategoryLink(item.parent);

  return (
    <div className="product__category-item mb-20 text-center">
      <div className="product__category-thumb w-img">
        <Link href={link}>
          <Image
            src={item.img}
            alt="image"
            width={272}
            height={181}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="product__category-content">
        <h3 className="product__category-title">
          <Link href={link}>{item.parent}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleCategory;
