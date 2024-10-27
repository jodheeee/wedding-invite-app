import type { FC, ReactNode } from 'react';

interface ModuleViewProps {
  children: ReactNode;
}

const ModuleView: FC<ModuleViewProps> = ({ children }) => (
  <div className="flex flex-col flex-1 bg-slate-50 h-screen">
    <div className="relative bg-white h-screen md:h-600 w-full md:w-360 md:m-auto overflow-y-auto">
      <div className="px-30">{children}</div>
    </div>
  </div>
);

export default ModuleView;
