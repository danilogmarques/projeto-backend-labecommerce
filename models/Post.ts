 export interface PostDB {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
 }

 export interface PostModel {
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string,
    creator: {
        id: string,
        name: string
    }
 }

 export class Post {
    constructor(
        private id: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private updateAt: string,
        private creatorId: string,
        private creatorName: string 
    ) {}

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getContent(): string {
        return this.content
    }

    public setContent(value: string): void {
        this.content = value
    }

    public getLikes(): number {
        return this.likes
    }

    public setLikes(value: number): void {
        this.likes = value
    }

    public getDislikes(): number {
        return this.dislikes
    }

    public setDislikes(value: number): void {
        this.dislikes
    }

    public addLike(): void {
        this.likes += 1
    }

    public removeLike(): void {
        this.likes -= 1
    }

    public addDislike(): void {
        this. dislikes += 1
    }

    public removeDislike(): void {
        this.dislikes -= 1
    }

    public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt (value: string): void {
        this.createdAt = value
    }

    public getUpdatedAt(): string {
        return this.updateAt
    }

    public setUpdateAt (value: string): void {
        this.updateAt = value
    }

    public getCreatorId(): string {
        return this.creatorId
    }

    public setCreatorId (value: string): void {
        this.creatorId = value
    }

    public getCreatorName(): string {
        return this.creatorName
    }

    public setCreatorName (value: string): void {
        this.updateAt = value
    }
 }