import 'antd/dist/antd.css';
import { List } from 'antd'
import DemoListItem from './DemoListItem';
import { DemoInfo } from './DemoInfo'

const DemoList = () => {
    const demos = DemoInfo
    return (
        // TODO: migrate descriptions, etc. to web service
        <List
            itemLayout="vertical"
            size="large"
            dataSource={demos}
            renderItem={(item) => (
                <DemoListItem
                    key={item.key}
                    title={item.title}
                    description={item.description}
                    content={item.content}
                    demoPath={item.page_path}
                    links={item.links}
                    image={item.image}
                    image_alt={item.image_alt}
                />
            )}
        />
    )
}

export default DemoList
