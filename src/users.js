import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const Sample_Mission_2 = (props) => (
    <List title="Sample Mission 2" {...props}>
        <Datagrid>
	    <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
