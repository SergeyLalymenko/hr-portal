import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import {
    fetchDashboardComponents,
    updateDashboardComponentsLocal,
    deleteDashboardComponent
} from '../../store/dashboardComponentsSlice';
import Tippy from '@tippyjs/react';
import ToDoList from './ToDoList/ToDoList';
import Events from './Events/Events';
import './Dashboard.scss';

function Dashboard({ renderUserName }) {
    const dispatch = useDispatch();
    const dashboardComponents = useSelector((state) => state.dashboardComponents.data);
    const [isCustomizing, setIsCustomizing] = useState(false);
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
            activationConstraint: {
                distance: 10,
            },
        }),
    );

    useEffect(() => {
        dispatch(fetchDashboardComponents());
    }, [dispatch]);

    function onDeleteComponent(id) {
        console.log(id);
        dispatch(deleteDashboardComponent(id));
    }

    function onDragEnd({ active, over }) {
        if (active.id !== over.id) {
            const oldIndex = dashboardComponents.findIndex((item) => item.id === active.id);
            const newIndex = dashboardComponents.findIndex((item) => item.id === over.id);

            dispatch(updateDashboardComponentsLocal(arrayMove(dashboardComponents, oldIndex, newIndex)));
        }
    }

    function getDashboardComponent(name) {
        switch(name) {
            case 'ToDoList': return ToDoList; break;
            case 'Events': return Events; break;
        }
    }

    function getCustomizingClass() {
        return isCustomizing ? 'customizing' : '';
    }

    return (
        <div className="dashboard">
            <div className="dashboard__head">
                <h2>
                    Good Morning, <span>{renderUserName()}</span>!
                </h2>

                <Tippy
                    className="tip"
                    content={<p>Click here to enable drag and drop mode to customize your dashboard.<span className="tip-triangle tip-right"></span></p>}
                    placement="left"
                    disabled={isCustomizing}
                >
                    <button className={getCustomizingClass()} onClick={() => setIsCustomizing(!isCustomizing)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5651 10.718L10.7193 7.56422L9.68526 6.53016L8.23963 7.97578C8.22239 7.99305 8.20191 8.00676 8.17937 8.01611C8.15683 8.02546 8.13267 8.03027 8.10826 8.03027C8.08386 8.03027 8.05969 8.02546 8.03715 8.01611C8.01461 8.00676 7.99413 7.99305 7.9769 7.97578L7.71416 7.71305C7.64151 7.64039 7.64151 7.52273 7.71416 7.45031L9.15979 6.00469L8.37135 5.21602C8.08096 4.92562 7.61033 4.92562 7.31994 5.21602L5.21736 7.31859C4.92721 7.60898 4.92697 8.07961 5.21736 8.37L7.5651 10.718ZM16.6699 7.98047C17.1096 7.54078 17.1093 6.82805 16.6699 6.38836L15.6093 5.32781C15.1696 4.88812 14.4567 4.88812 14.0167 5.32781L12.9381 6.40617L15.5913 9.0593L16.6699 7.98047ZM12.4078 6.9368L5.44682 13.8968L5.00713 16.4149C4.94783 16.7545 5.24361 17.0503 5.58346 16.9905L8.10182 16.549L15.0609 9.58969L12.4078 6.9368ZM16.7819 13.6266L15.9935 12.8381L14.5478 14.2838C14.4752 14.3564 14.3575 14.3564 14.2851 14.2838L14.0224 14.021C13.9499 13.9484 13.9499 13.8307 14.0224 13.7583L15.468 12.3127L14.4335 11.2781L11.2792 14.4319L13.6279 16.7803C13.9183 17.0707 14.3889 17.0707 14.6793 16.7803L16.7819 14.678C17.0723 14.3876 17.0723 13.917 16.7819 13.6266Z"
                                fill="currentColor"/>
                        </svg>

                        <span>
                            {
                                isCustomizing ? 'Done Customizing' : 'Customize'
                            }
                        </span>
                    </button>
                </Tippy>
            </div>

            <div className="dashboard__body">
                {
                    dashboardComponents && (
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={onDragEnd}
                        >
                            <SortableContext
                                items={dashboardComponents}
                                disabled={!isCustomizing}
                            >
                                {
                                    dashboardComponents.map((componentData) => {
                                        const Component = getDashboardComponent(componentData.name);

                                        return <Component
                                            key={componentData.id}
                                            id={componentData.id}
                                            isCustomizing={isCustomizing}
                                            getCustomizingClass={getCustomizingClass}
                                            onDeleteComponent={onDeleteComponent}
                                        />
                                    })
                                }
                            </SortableContext>
                        </DndContext>
                    )
                }
            </div>
        </div>
    );
}

export default Dashboard;
