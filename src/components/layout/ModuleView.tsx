import type { FC, ReactNode } from 'react';

interface ModuleViewProps {
  children: ReactNode;
  footer?: ReactNode;
}

const ModuleView: FC<ModuleViewProps> = ({ children, footer }) => (
  <div className="flex flex-col flex-1 bg-slate-50 md:min-h-screen">
    <div className="relative flex flex-col bg-white w-full h-screen-dvh md:h-800 md:w-360 md:m-auto">
      <div className="flex-grow">{children}</div>
      {footer && <div className="mt-auto">{footer}</div>}
    </div>
  </div>
);

export default ModuleView;
