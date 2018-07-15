export class DataGridColumnModel {
    public field: string;
    public header: string;
    public sortable: boolean;
    public scope: string;
    public styleClass: string;

    constructor(options: {
        field?: string,
        header?: string,
        scope?: string,
        styleClass?: string,
        sortable?: boolean,
    } = {}) {
        options = options || {};
        this.field = options.field || null;
        this.header = options.header || null;
        this.scope = options.scope || 'col';
        this.styleClass = options.styleClass || '';
        this.sortable = options.sortable || false;
    }
}