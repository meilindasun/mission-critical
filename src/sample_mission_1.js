import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const Sample_Mission_1 = (props) => (
    <List title="Sample Mission 1 - Drug Interdiction (< 3 days)" {...props}>
        <Datagrid>
	    <TextField source="priority" />
            <TextField source="component" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
