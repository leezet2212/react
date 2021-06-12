import React, { useState } from 'react'

export const AddTask = ({ addName }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add name');
            return;
        }
        addName({
            text, day, reminder
        });
        // setText('');
        // setDay('');
        // setReminder(false);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type="text"
                    placeholder="Add Name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Time & Day</label>
                <input
                    type="text"
                    placeholder="Add Time & Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    checked={reminder}
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Add Name" />
        </form>
    )
}
