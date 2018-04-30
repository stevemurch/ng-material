export class Occasion {
    constructor(
        public title?: string,
        public date?: Date,
        public persons?: any[],
        public notes?: string,
        public type?: number
    ) {

    }
}
