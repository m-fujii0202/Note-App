import React from 'react'

const Sidebar = () => {
  return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
         <h1>ノート</h1>
         <button>追加</button>
        </div>
        <div className='app-sidebar-notes'>
            <div className='app-sidebar-note'>
                <div className='app-sidebar-title'>
                    <strong>タイトル</strong>
                    <button>削除</button>
                </div>
                <p>ノート内容です</p>
                <small>最後の修正日:XX/XX</small>
            </div>
        </div>

    </div>
  )
}

export default Sidebar;