import Image from "next/image";
import styles from "../assets/styles/pages/page.module.css";
import { createMyClient } from "@/facades";
import { logKeyAndType } from "@/utils";
import { PageDocument } from "@/prismicio-types";

export default async function Home() {
  const client = createMyClient();
  const page = await client.getByUID("page", "about");
  const menuItem = await client.getByUID("menu_item", "articles");

  return <div>Test</div>;
}
