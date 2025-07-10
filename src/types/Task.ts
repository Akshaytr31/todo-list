export default interface Task {
    title: string;
    status: string;
    id: number;
    assignedUser: string | null
}