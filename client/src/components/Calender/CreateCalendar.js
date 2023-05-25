// Tailwind UI component for calendar used
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'

import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import { Fragment, useEffect, useState } from 'react'
import Popup from '../Popup'

const meetings = [
    {
        id: 1,
        exercise_name: 'Running',
        exercise_type: 'Cardio',
        sets: '',
        reps: '',
        weight: '',
        duration: '7 min 45 seconds',
        distance: '1 mile',
        startDatetime: '2023-05-14T13:00',
        endDatetime: '2023-05-14T14:30',
    },

    {
        id: 2,
        exercise_name: 'Bench Press',
        exercise_type: 'Lifting',
        sets: 'Sets: 10',
        reps: 'Reps: 10',
        weight: '315 lbs',
        duration: '',
        distance: '',
        startDatetime: '2023-05-20T09:00',
        endDatetime: '2023-05-20T11:30',
    },

    {
        id: 3,
        exercise_name: 'Chest Press',
        exercise_type: 'Lifting',
        sets: 'Sets: 10',
        reps: 'Reps: 10',
        weight: '70 lbs',
        duration: '',
        distance: '',
        startDatetime: '2023-05-24',
        endDatetime: '2023-05-24',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CreateCalendar() {
    const [buttonPopup, setButtonPopup] = useState(false) // controls the popup

    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    const [exercise_name, setExerciseName] = useState('') // exercise name
    const [exercise_type, setExerciseType] = useState('') // exercise type
    const [sets, setSets] = useState('') // exercise sets
    const [reps, setReps] = useState('') // exercise reps
    const [weight, setWeight] = useState('') // exercise weight
    const [duration, setWorkoutDuration] = useState('') // exercise duration
    const [distance, setDistance] = useState('') // exercise distance
    // const [currentDay, setCurrentDay] = useState(""); // exercise day
    let [startDateTime, setStartDateTime] = useState('yyyy-MM-dd') // exercise start time
    let [endDateTime, setEndDateTime] = useState('yyyy-MM-dd') // exercise end time
    const [formattedSelectedDay, setFormattedSelectedDay] = useState('') // exercise end time

    // format date for post request
    useEffect(() => {
        setFormattedSelectedDay(format(selectedDay, 'yyyy-MM-dd'))
    }, [selectedDay])

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayMeetings = meetings.filter(meeting =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    )

    // push the form to the input to meetings array and then renders the meeting component with the new meeting data in the array
    function addMeeting(e) {
        e.preventDefault()
        meetings.push({
            id: meetings.length + 1,
            exercise_name: exercise_name,
            exercise_type: exercise_type,
            sets: sets,
            reps: reps,
            weight: weight,
            duration: duration,
            distance: distance,
            date: formattedSelectedDay,
            startDatetime: formattedSelectedDay,
        })

        const data = {
            exercise_name: exercise_name,
            exercise_type: exercise_type,
            sets: sets,
            reps: reps,
            weight: weight,
            duration: duration,
            distance: distance,
            date: formattedSelectedDay,
        }

        console.log(meetings)
        console.log(selectedDay)
        setButtonPopup(false)

        // post request to backend

        // empty all the form fields
        setExerciseName('')
        setExerciseType('')
        setSets('')
        setReps('')
        setWeight('')
        setWorkoutDuration('')
        setDistance('')
        setStartDateTime('')
        setEndDateTime('')

        console.log(`exercise_name: ${exercise_name}`)
    }

    return (
        <div className='p-16 '>
            <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
                {/* Calender Section */}
                <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
                    <div className='md:pr-14'>
                        <div className='flex items-center'>
                            <h2 className='flex-auto font-semibold text-gray-900'>
                                {format(firstDayCurrentMonth, 'MMMM yyyy')}
                            </h2>
                            <button
                                type='button'
                                onClick={previousMonth}
                                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
                            >
                                <span className='sr-only'>Previous month</span>
                                <ChevronLeftIcon
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                />
                            </button>
                            <button
                                onClick={nextMonth}
                                type='button'
                                className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
                            >
                                <span className='sr-only'>Next month</span>
                                <ChevronRightIcon
                                    className='w-5 h-5'
                                    aria-hidden='true'
                                />
                            </button>
                        </div>
                        <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div className='grid grid-cols-7 mt-2 text-sm'>
                            {days.map((day, dayIdx) => (
                                <div
                                    key={day.toString()}
                                    className={classNames(
                                        dayIdx === 0 &&
                                            colStartClasses[getDay(day)],
                                        'py-1.5'
                                    )}
                                >
                                    <button
                                        type='button'
                                        onClick={() => {
                                            console.log(day)
                                            setSelectedDay(day)
                                        }}
                                        className={classNames(
                                            isEqual(day, selectedDay) &&
                                                'text-white',
                                            !isEqual(day, selectedDay) &&
                                                isToday(day) &&
                                                'text-red-500',
                                            !isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth
                                                ) &&
                                                'text-gray-900',
                                            !isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                !isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth
                                                ) &&
                                                'text-gray-400',
                                            isEqual(day, selectedDay) &&
                                                isToday(day) &&
                                                'bg-red-500',
                                            isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                'bg-gray-900',
                                            !isEqual(day, selectedDay) &&
                                                'hover:bg-gray-200',
                                            (isEqual(day, selectedDay) ||
                                                isToday(day)) &&
                                                'font-semibold',
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                    >
                                        <time
                                            dateTime={format(day, 'yyyy-MM-dd')}
                                        >
                                            {format(day, 'd')}
                                        </time>
                                    </button>

                                    <div className='w-1 h-1 mx-auto mt-1'>
                                        {meetings.some(meeting =>
                                            isSameDay(
                                                parseISO(meeting.startDatetime),
                                                day
                                            )
                                        ) && (
                                            <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <section className='mt-12 md:mt-0 md:pl-14'>
                        <h2 className='font-semibold text-gray-900'>
                            Workouts on{' '}
                            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                {format(selectedDay, 'MMM dd, yyy')}
                            </time>
                        </h2>
                        <ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500'>
                            {selectedDayMeetings.length > 0 ? (
                                selectedDayMeetings.map(meeting => (
                                    <Meeting
                                        meeting={meeting}
                                        key={meeting.id}
                                    />
                                ))
                            ) : (
                                <>
                                    <p class='mb-4'>No workouts on this day.</p>
                                    <button
                                        type='button'
                                        onClick={() => setButtonPopup(true)}
                                        class='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                                    >
                                        Add Workout
                                    </button>

                                    <Popup
                                        trigger={buttonPopup}
                                        setTrigger={setButtonPopup}
                                    >
                                        <div className='flex flex-col items-center justify-center'>
                                            <h1 className='mt-3 mb-4 text-2xl font-bold'>
                                                Add a Workout
                                            </h1>
                                            <form
                                                className='flex flex-col items-center justify-center'
                                                onSubmit={addMeeting}
                                            >
                                                <label className='mb-2 text-lg font-bold'>
                                                    Exercise Name
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Exercise Name'
                                                    onChange={e =>
                                                        setExerciseName(
                                                            e.target.value
                                                        )
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <label className='mb-2 text-lg font-bold'>
                                                    Exercise Type
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Exercise Type'
                                                    onChange={e =>
                                                        setExerciseType(
                                                            e.target.value
                                                        )
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <label className='mb-2 text-lg font-bold'>
                                                    Sets
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Sets'
                                                    onChange={e =>
                                                        setSets(e.target.value)
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <label className='mb-2 text-lg font-bold'>
                                                    Reps
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Reps'
                                                    onChange={e =>
                                                        setReps(e.target.value)
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <label className='mb-2 text-lg font-bold'>
                                                    Weight
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Weight'
                                                    onChange={e =>
                                                        setWeight(
                                                            e.target.value
                                                        )
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <label className='mb-2 text-lg font-bold'>
                                                    Workout Duration
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Workout Duration'
                                                    onChange={e =>
                                                        setWorkoutDuration(
                                                            e.target.value
                                                        )
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <label className='mb-2 text-lg font-bold'>
                                                    Distance
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='Distance'
                                                    onChange={e =>
                                                        setDistance(
                                                            e.target.value
                                                        )
                                                    }
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                />
                                                <input
                                                    type='text'
                                                    name='startDatetime'
                                                    placeholder='YYYY-MM-DD'
                                                    onChange={e =>
                                                        setStartDateTime(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={format(
                                                        selectedDay,
                                                        'yyyy-MM-dd'
                                                    )}
                                                    className='mb-4 border-2 border-gray-300 rounded-lg'
                                                    hidden
                                                />

                                                <button
                                                    type='submit'
                                                    onSubmit={addMeeting}
                                                    className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </Popup>
                                </>
                            )}
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    )
}

function Meeting({ meeting }) {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)

    return (
        <li className='flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100'>
            <div className='flex-auto m-auto'>
                <p className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                    {meeting.exercise_name}
                </p>
                <p className='text-gray-500'>{meeting.exercise_type}</p>
                <p className='text-gray-900'>{meeting.sets}</p>
                <p className='text-gray-900'>{meeting.reps}</p>
                <p className='text-gray-900'>{meeting.weight}</p>
                <p className='text-gray-900'>{meeting.duration}</p>
                <p className='text-gray-900'>{meeting.distance}</p>
            </div>
            <Menu
                as='div'
                className='relative opacity-0 focus-within:opacity-100 group-hover:opacity-100'
            >
                <div>
                    <Menu.Button className='-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600'>
                        <span className='sr-only'>Open options</span>
                        <EllipsisVerticalIcon
                            className='w-6 h-6'
                            aria-hidden='true'
                        />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='py-1'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='#'
                                        className={classNames(
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Edit
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='#'
                                        className={classNames(
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Cancel
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </li>
    )
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]
