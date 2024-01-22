/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {FC, useState} from "react";
import {Button, Collapse, TextField, useTheme} from "@mui/material";

const Inventory: FC<{}> = ({}) => {
    const [isSearching, setIsSearching] = useState(false);
    const theme = useTheme();

    return <div css={css`
      overflow-x: hidden;
      width: 100%;
      height: 100%;
      padding: ${theme.spacing(2)};
    `}>
        <Collapse in={!isSearching}>
            <h1>Inventory</h1>
        </Collapse>
        <div css={css`
          display: flex;
          flex-direction: row;
        `}>
            <TextField
                onFocus={() => setIsSearching(true)}
                onBlur={() => setIsSearching(false)}
                placeholder="Search"
                size="small"
                variant="outlined"
                fullWidth
            />
            <Collapse in={isSearching} orientation="horizontal" >
                <Button css={css`margin-left: ${theme.spacing(1)}`}>
                    Cancel
                </Button>
            </Collapse>
        </div>
    </div>
}

export default Inventory