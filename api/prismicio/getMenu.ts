import "server-only";
import { createMyClient } from "@/facades/prismicio-client/createMyClient";

import type { NavigationDocument, MenuItemDocument } from "@/prismicio-types";
import { logKeyAndType } from "@/utils";

export type NavigationDocumentWithContentRelationship = NavigationDocument &
  NavigationDocumentFetchLinks;
export interface NavigationDocumentFetchLinks {
  data: {
    menu_item: {
      data: Pick<MenuItemDocument["data"], "name" | "link">;
    };
  };
}
export type Menu = NavigationDocumentWithContentRelationship;

export const getMenu = async (): Promise<Menu | null> => {
  const client = createMyClient();

  try {
    const menu: Menu =
      await client.getSingle<NavigationDocumentWithContentRelationship>(
        "navigation",
        {
          fetchLinks: ["menu_item.name", "menu_item.link"],
        }
      );
    return menu;
  } catch (error) {
    console.error("error occurred", error);
    return null;
  }
};
