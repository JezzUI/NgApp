export interface Course {
        id: number;
        image: string;
        title: string;
        description: string;
        category: string;
        price: number;
        rating: {
            rate: number;
            count: number;
        }
}
