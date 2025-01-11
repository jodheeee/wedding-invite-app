import type { FC, ReactNode } from 'react';

interface ModuleViewProps {
  children: ReactNode;
}

const ModuleView: FC<ModuleViewProps> = ({ children }) => (
  <div className="flex flex-col flex-1 bg-slate-50">
    <div className="relative flex flex-col bg-white w-full md:max-w-xl md:mx-auto">
      <div className="flex-grow">{children}</div>
    </div>
  </div>
);

export default ModuleView;
