import React, { Component } from 'react';

// columns: Array
// onSort: Function
// sortColumn: Object

class TableHeader extends Component {
    raiseSort = path => {
        const sortedColumn = {...this.props.sortedColumn};

        if ( sortedColumn.path === path )
            sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
        else{
            sortedColumn.path = path;
            sortedColumn.order = "asc";
        }

        this.props.onSort( sortedColumn );
    }

    // renderSortIcon = column => {
    //     if ( column.path !== this.props.sortedColumn.path )
    // }

    render() { 
        return ( 
            <thead>
                <tr>
                    {this.props.columns.map( col => 
                        <th 
                            key={col.path || col.key} 
                            onClick={ () => this.raiseSort(col.path)}>
                            {col.label} {this.renderSortIcon()}
                        </th>
                    )}
                </tr>
            </thead> 
        );
    }
}
 
export default TableHeader;