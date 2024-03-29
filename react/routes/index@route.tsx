import { defineRouteComponent, defineMeta } from '@web-widget/react';
import BaseLayout from './(components)/BaseLayout.tsx';
import ReactCounter from './(components)/Counter@widget.tsx';
import VueCounter from './(components)/Counter@widget.vue?as=jsx';

export const meta = defineMeta({
  title: 'Home - Web Widget',
});

export default defineRouteComponent(function Page() {
  return (
    <BaseLayout>
      <h1>Welcome to Web Widget.</h1>
      <p>Try to update this message in the <code>./routes/index@route.tsx</code> file.</p>

      <h2>React</h2>
      <ReactCounter count={0} />

      <h2>Vue</h2>
      <VueCounter count={0} />
    </BaseLayout>
  );
});
