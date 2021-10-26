import { Card, CardBody, CardHeader, Form, RichTextEditor, RichTextField, TextField, Title } from "cbi-react-core"

type AddNewPostProp = {
    title: string
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>
export const AddNewPost: React.FC<AddNewPostProp> = ({ title }) => {
    return (
        <>
            <Title className="font-normal" level={3} style={{ fontWeight: 'normal' }}>{title}</Title>
            <div className="flex gap-4">
                <div className="w-9/12">
                    <Card>
                        <CardBody>
                            <Form>
                                <TextField placeholder="Title" label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]} />
                                <RichTextField label="Content" />
                            </Form>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>SEO</CardHeader>
                        <CardBody>
                        </CardBody>
                    </Card>
                </div>
                <div className="w-3/12">
                    <Card>
                        <CardHeader>Publish</CardHeader>
                        <CardBody></CardBody>
                    </Card>
                    <Card>
                        <CardHeader>Format</CardHeader>
                        <CardBody></CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}