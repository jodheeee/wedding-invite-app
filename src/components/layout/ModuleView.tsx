import type { FC, ReactNode } from 'react';

interface ModuleViewProps {
  children: ReactNode;
}

const ModuleView: FC<ModuleViewProps> = ({ children }) => (
  <div className="flex flex-col flex-1 bg-slate-50 h-screen">
    <div className="relative bg-white h-screen md:h-650 w-full md:w-360 md:m-auto">
      {children}
    </div>
  </div>
);

export default ModuleView;
