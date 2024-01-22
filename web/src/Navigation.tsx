/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import React, {FC} from "react";
import {Link, Outlet, useLocation} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction, useTheme} from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const pathMapping: {[path: string]: number} = {
    '/': 0,
    '/about': 1,
    '/nothing-here': 2,
}

 const Navigation: FC<{}> = ({}) => {
     const theme = useTheme();
     const location = useLocation();

     return <div css={css`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
    `}>
        <div css={css`width: 100%; flex: 1; overflow: hidden`}>
            <Outlet />
        </div>
        <div css={css`
          background-color: blue; 
          width: 100%;
          margin-bottom: ${theme.spacing(4)};
        `}>
            <BottomNavigation
                showLabels
                value={pathMapping[location.pathname]}
            >
                <BottomNavigationAction component={Link} to="/" label="Inventory" icon={<InventoryIcon />} />
                <BottomNavigationAction component={Link} to="/about" label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction component={Link} to="/nothing-here" label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    </div>
}

export default Navigation
