import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const Sample_Mission_1 = (props) => (
    <List title="Sample Mission 1" {...props}>
        <Datagrid>
	    <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
