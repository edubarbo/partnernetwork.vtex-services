import './styles.global.css';
import React from 'react';
interface IndexAppProps {
    title: string;
    linkLabel?: string;
    onLinkClick?(event: MouseEvent): void;
}
declare const IndexApp: React.FC<IndexAppProps>;
export default IndexApp;
