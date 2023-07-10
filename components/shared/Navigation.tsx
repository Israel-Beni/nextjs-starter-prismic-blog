// 'use client'

import React from "react";
import styles from '@/assets/styles/components/navigation.module.scss';
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { getMenu } from "@/api";

import {
  NavigationDocumentData,
  NavigationDocumentDataMenuItemsItem,
} from "@/prismicio-types";
import type { ContentRelationshipField, LinkField } from "@prismicio/client";
import type { Menu } from "@/api/prismicio/getMenu";

export type MenuItemExpanded = ContentRelationshipField<NavigationDocumentData>;
export type MenuItem = NavigationDocumentDataMenuItemsItem["menu_item"];
export interface MenuItemData {
  name: string;
  link: LinkField;
};

async function Navigation(): Promise<JSX.Element> {
  const menu: Menu | null = await getMenu();
  let menuItems: MenuItem[] = [];

  const setMenuItems = (): void => {
    if (menu?.data?.menu_items && menu?.data?.menu_items?.length > 0)
      menu.data.menu_items.map((item) => menuItems.push(item.menu_item));
  };

  setMenuItems();

  const renderMenuItems = () => {
    if (menuItems.length > 0)
      return menuItems.map((menuItem, i) => {
        if ("data" in menuItem) {
          const data = menuItem.data as MenuItemData;
          return (
            <li className={styles.list_item} key={i}>
              <PrismicNextLink field={data.link}>{data.name}</PrismicNextLink>
            </li>
          );
        }
      });
    return <></>;
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>{renderMenuItems()}</ul>
    </nav>
  );
}

export default Navigation;
