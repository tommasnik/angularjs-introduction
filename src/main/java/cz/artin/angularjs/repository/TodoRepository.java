package cz.artin.angularjs.repository;

import cz.artin.angularjs.dto.Todo;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Tomas Masnik (tomas.masnik@artin.cz)
 */
@Component
public class TodoRepository {

    private Map<Long, Todo> todos = new HashMap<>();

    private long idCounter = 1;


    public Todo find(Long id) {
        return todos.get(id);
    }

    public List<Todo> all() {
        ArrayList<Todo> result = new ArrayList<>(todos.values());
        Collections.sort(result, new Comparator<Todo>() {
            @Override
            public int compare(Todo o1, Todo o2) {
                return o1.getId().intValue() - o2.getId().intValue();
            }
        });
        return result;
    }

    public Todo create(Todo todo) {
        todo.setId(idCounter++);
        return save(todo);
    }

    public Todo update(Long id, Todo todo) {
        return save(todo);
    }

    private Todo save(Todo todo) {
        todos.put(todo.getId(), todo);
        return todo;
    }

    public void delete(Long id) {
        todos.remove(id);
    }
}
