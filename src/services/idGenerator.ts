import { v4 } from 'uuid'

export class IDGenerator {
    public generate = (): string => {
        return v4()
    }
}