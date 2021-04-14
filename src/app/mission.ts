export class Mission {
    name: string;
    launchDate: Date;
    imageUrl: string;
    launchSuccess: boolean;
    landSuccess: boolean;
    launchYear: string;
    id: string;
    constructor(name: string, launchDateUtc: string, url: string, launchSuccess: boolean,
        launchYear: string, id: string, landSuccess: boolean) {
        this.name = name;
        this.launchDate = new Date(launchDateUtc);
        this.imageUrl = url;
        this.launchSuccess = launchSuccess;
        this.launchYear = launchYear;
        this.id = id;
        this.landSuccess = landSuccess;
    }
}