import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import React from "react";

import { Link } from "../atoms";
import { SidebarHeader } from "../header/SidebarHeader";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "0px",
}));

export const SidebarContent = ({ categories }) => {
  return (
    <>
      <SidebarHeader/>
      <List>
        {categories.map((item) => {
          const { _id, name } = item;
          return (
            <React.Fragment key={_id}>
              <Link linkTo={`/products/categories/${name}`}>
                <Box sx={{ display: "flex" }}>
                    <StyledListItem>
                        <ListItemText secondary={name}/>
                    </StyledListItem>
                </Box>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};
