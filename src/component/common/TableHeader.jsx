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

    renderSortIcon = column => {
        const {sortedColumn} = this.props;

        if ( column.path !== sortedColumn.path ) return null;

        if (sortedColumn.order ===  'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    render() { 
        return ( 
            <thead>
                <tr>
                    {this.props.columns.map( col => 
                        <th 
                            key={col.path || col.key} 
                            onClick={ () => this.raiseSort(col.path)}>
                            {col.label} {this.renderSortIcon(col)}
                        </th>
                    )}
                </tr>
            </thead> 
        );
    }
}
 
export default TableHeader;