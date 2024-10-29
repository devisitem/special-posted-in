export default class CodeBlockTitle {

    private readonly RE= /^([^ ]+)[ ]?(?:\[(.*?)\])?/g;

    private readonly _name: string;
    private readonly _description: string;

    public constructor(text: string) {
        if (!this.RE.test(text)) {
            this._name = 'text';
            this._description = '';
            return;
        }
        this.RE.lastIndex = 0;
        const executed = this.RE.exec(text);
        if (!executed) {
            throw new Error("invalid code block information.");
        }

        this._name = executed[1];
        this._description = executed[2];
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    public hasDescription(): boolean {
        return this._description?.length > 0;
    }
}