import { Card, CardBody, Form, RichTextField, TextField, Title, useTranslate } from "cbi-react-core"
import { CheckboxCard } from "./CheckboxCard"
import { ImageCard } from "./ImageCard"
import { PublishCard } from "./PublishCard"
import { RadioCard } from "./RadioCard"
import { SEO } from "./SEO"
import { TagCard } from "./TagCard"



// <Radio value="standard">{t('Standard')}</Radio>
//                         <Radio value="Aside">{t('Aside')}</Radio>
//                         <Radio value="Image">{t('Image')}</Radio>
//                         <Radio value="Video">{t('Video')}</Radio>
//                         <Radio value="Quote">{t('Quote')}</Radio>
//                         <Radio value="Link">{t('Link')}</Radio>
//                         <Radio value="Gallery">{t('Gallery')}</Radio>
//                         <Radio value="Audio">{t('Audio')}</Radio>
type AddNewPostProp = {
    postType: PostType
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>
export const AddNewPost: React.FC<AddNewPostProp> = ({ postType }) => {
    const { title, fields } = postType

    const getComponent = (type: typeof PostFieldType[number]) => {
        switch (type) {
            case 'string': return TextField
            case 'editor': return RichTextField
            default:
                return TextField
        }
    }

    const renderCategories = () => { }

    const renderTags = () => {

    }

    const renderImage = () => {

    }

    const renderImages = () => {

    }

    const renderContent = (position?: 'left' | 'right') => {
        return Object.keys(fields).map(e => {
            const f = fields[e]
            let type: typeof PostFieldType[number]
            let title = e
            if (typeof f === 'object') {
                type = f.type
                title = f.title || e
                if (f.position !== position) return
            } else {
                type = f
            }
            let Component = getComponent(type)
            return <Component label={title} name={e} />
        })
    }

    return (
        <>
            <Title className="font-normal" level={3} style={{ fontWeight: 'normal' }}>{title}</Title>
            <Form>
                <div className="flex gap-4">
                    <div className="w-9/12">
                        <Card>
                            <CardBody>
                                {renderContent('left')}
                                {/* <TextField placeholder="Title" label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]} />
                                <RichTextField label="Content" name="content" /> */}
                            </CardBody>
                        </Card>
                        <SEO />
                    </div>
                    <div className="" style={{ width: '100%', maxWidth: 320 }}>
                        <PublishCard />
                        <RadioCard
                            defaultValue="Standard"
                            title="Format"
                            values={[
                                { title: 'Standard', value: 'Standard' },
                                { title: 'Aside', value: 'Aside' },
                                { title: 'Image', value: 'Image' },
                                { title: 'Video', value: 'Video' },
                                { title: 'Quote', value: 'Quote' },
                                { title: 'Link', value: 'Link' },
                                { title: 'Gallery', value: 'Gallery' },
                                { title: 'Audio', value: 'Audio' },
                            ]}
                        />
                        <CheckboxCard
                            title="Categories"
                            values={[
                                { title: 'Analytical', value: 'Analytical' },
                                { title: 'Books', value: 'Books' },
                                { title: 'Uncategorized', value: 'Uncategorized' },
                            ]}
                        />
                        <TagCard title="Tags" />
                        <ImageCard title="Cover" />
                    </div>
                </div>
            </Form>
        </>
    )
}