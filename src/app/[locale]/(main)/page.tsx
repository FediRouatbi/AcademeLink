'use client';
import React, { useState } from 'react';

import Editor from '@/components/Editor';
import { SortableList } from '@/components/common/SortableList';
import { Button } from '@/components/ui/button';
import { BadgePlus } from 'lucide-react';
import { CustomDialog } from '@/components/Dialog';

const Page = () => {
  const [items, setItems] = useState([{ id: 1 }, { id: 2 }]);

  return (
    <>
      <div className="flex justify-end">
        <CustomDialog
          buttonText={
            <>
              <BadgePlus className="mr-2 h-4 w-4" />
              Add New Article
            </>
          }
          title="Edit profile"
          description="Make changes to your profile here. Click save when you're done."
          content={<Editor content="dsqdqsd" editable={true} hideButton />}
          actionText="Publish"
        />
      </div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            <SortableList.DragHandle />
            <Editor
              content='<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>'
            />
          </SortableList.Item>
        )}
      />
    </>
  );
};
export default Page;
