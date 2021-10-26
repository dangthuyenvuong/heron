import { FacebookOutlined, GoogleOutlined, TwitterOutlined } from "@ant-design/icons"
import { Tabs } from "antd"
import { Card, CardBody, CardHeader, Form, TextField } from "cbi-react-core"
import { TextareaField } from "views/ui/atoms"

export const SEO: React.FC = () => {
    return (
        <Card>
            <CardHeader>SEO</CardHeader>
            <CardBody>
                <Tabs tabPosition="left" >
                    <Tabs.TabPane key="facebook" tab={<div className="flex items-center"><FacebookOutlined /> Facebook</div>}>
                        <Form layout="vertical">
                            <TextField label="Title" />
                            <TextareaField label="Content" />
                        </Form>
                    </Tabs.TabPane>
                    <Tabs.TabPane key="titter" tab={<div className="flex items-center"><TwitterOutlined /> Twitter</div>}>
                        <Form layout="vertical">
                            <TextField label="Title" />
                            <TextareaField label="Content" />
                        </Form>
                    </Tabs.TabPane>
                    <Tabs.TabPane key="google" tab={<div className="flex items-center"><GoogleOutlined /> Google</div>}>
                        <Form layout="vertical">
                            <TextField label="Title" />
                            <TextareaField label="Content" />
                        </Form>
                    </Tabs.TabPane>
                </Tabs>
            </CardBody>
        </Card>
    )
}