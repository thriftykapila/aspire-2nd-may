export interface Transaction {
    id: number;
    amount: string;
    icon: string;
    textColor: string;
    color: string;
  }

 export interface AccordionItemProps {
    icon: string;
    title: string;
    content: React.ReactNode;
    expand: boolean;
    onClick: () => void;
  }