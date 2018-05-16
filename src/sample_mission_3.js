import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const Sample_Mission_3 = (props) => (
    <List title="Sample Mission 3 - Flight Operations" {...props}>
        <Datagrid>
	    <TextField source="priority" />
            <TextField source="component" />
            <TextField source="description" />
        </Datagrid>
    </List>
)
