import React from 'react'
import './App.css'

function App() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [gender, setGender] = React.useState('male');
    const [subjects, setSubjects] = React.useState({
        english: true,
        hindi: false,
        physics: false,
    });
    const [resume, setResume] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [skills, setSkills] = React.useState('');
    const [about, setAbout] = React.useState('');

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setGender('');
        setSubjects({
            english: true,
            hindi: false,
            physics: false,
        });
        setResume('');
        setUrl('');
        setSkills('');
        setAbout('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            skills,
            about,
        })
    }

    return (
        <>
            <div className="form-area">
                <h1 className="form-label">Personal Information</h1>
                <form action="#" method='get'>
                    <fieldset>
                        <label htmlFor="first-name">First Name<span className='required'>*</span></label>
                        <input type="text" name="first-name" value={firstName} placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} />

                        <label htmlFor="last-name">Last Name<span className='required'>*</span></label>
                        <input type="text" name="last-name" value={lastName} placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} />

                        <label htmlFor="email">Email<span className='required'>*</span></label>
                        <input type="text" name="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="contact">Contact<span className='required'>*</span></label>
                        <input type="number" name="contact" value={contact} placeholder='Enter Contact' onChange={(e) => setContact(e.target.value)} />

                        <label htmlFor="gender">Gender<span className='required'>*</span></label>
                        <input type="radio"
                            name="gender" value='male'
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender == 'male'} />Male
                        <input type="radio"
                            name="gender" value='female'
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender == 'female'} />Female
                        <input type="radio"
                            name="gender" value='others'
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender == 'others'} />Others

                        <label htmlFor="subjects">Your Subjects<span className='required'>*</span></label>
                        <input type="checkbox"
                            name="subjects"
                            onChange={(e) => setSubjects({ ...subjects, english: !subjects.english })}
                            checked={subjects.english} />English
                        <input type="checkbox"
                            name="subjects"
                            onChange={(e) => setSubjects({ ...subjects, hindi: !subjects.hindi })}
                            checked={subjects.hindi} />Hindi
                        <input type="checkbox"
                            name="subjects"
                            onChange={(e) => setSubjects({ ...subjects, physics: !subjects.physics })}
                            checked={subjects.physics} />Physics

                        <label htmlFor="resume">Upload Resume<span className='required'>*</span></label>
                        <input type="file" name="resume"
                            onChange={(e) => setResume(e.target.files[0])} />

                        <label htmlFor="url">Enter URL</label>
                        <input type="url" name="url" value={url} placeholder='Enter URL' onChange={(e) => setUrl(e.target.value)} />

                        <label htmlFor="skills">Select Skills</label>
                        <select name="skills" value={skills} onChange={e => setSkills(e.target.value)}>
                            <option value="" disabled>Select your skill</option>
                            <optgroup label='Begineer'>
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">JavaScript</option>
                            </optgroup>
                            <optgroup label='Begineer'>
                                <option value="4">React</option>
                                <option value="5">NodeJs</option>
                                <option value="6">Express</option>
                                <option value="7">MongoDB</option>
                            </optgroup>
                        </select>

                        <label htmlFor="about">About</label>
                        <textarea name="about" value={about} placeholder='Enter About Yourself' onChange={(e) => setAbout(e.target.value)}></textarea>


                        <button type="reset" onClick={handleReset}>Reset</button>
                        <button type="reset" onClick={e => handleSubmit(e)}>Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default App
