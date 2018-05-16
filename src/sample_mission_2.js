import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const Sample_Mission_2 = (props) => (
    <List title="Sample Mission 2 - Freedom of Navigation Operations (< 1 week)" {...props}>
        <Datagrid>
	    <TextField source="priority" />
            <TextField source="component" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
