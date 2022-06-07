import React from 'react';

class TagButtons extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {selected: ''}
    // }

    onTagClick = (e) => {
        this.props.onTagClick(e.target.id)
    }

    // componentDidUpdate(prevProps) {
    //     this.setState({selected: this.props.selected})
    //     console.log(this.props.selectedTag)
    // }

    render() {
        return (
            <div id='tagBtnsContainer' className='hidden-print'>
                {window.tagPool.map(tagGroup =>
                    <div className='btn-group' style={{marginTop: '4px', marginRight: '10px'}}>
                        {tagGroup.map(tag => {
                            return <button id={tag} className={this.props.tags} onClick={this.onTagClick} style={this.props.selectedTags.includes(tag) ? {backgroundColor: 'purple'} : {}}>{tag}</button>
                        })}
                    </div>
                )}
            </div>
        )
    }
}

export default TagButtons