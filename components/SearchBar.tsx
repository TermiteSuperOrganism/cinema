type SearchBarProps={
    value: string;
    onChangeText:(text:string)=>void;
    onClear?:()=>void;
};