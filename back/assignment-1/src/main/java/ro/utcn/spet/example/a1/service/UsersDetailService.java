package ro.utcn.spet.example.a1.service;

import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ro.utcn.spet.example.a1.entity.Admin;
import ro.utcn.spet.example.a1.entity.Userss;
import ro.utcn.spet.example.a1.exception.UserssNotFoundException;
import ro.utcn.spet.example.a1.repository.memory.AdminRepository;

import javax.transaction.Transactional;
import java.util.Collections;

@Service
@RequiredArgsConstructor
public class UsersDetailService implements UserDetailsService {
    private final AdminRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin teacher = repository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("Unknown teacher!"));
        return new User(teacher.getName(), teacher.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_TEACHER")));
    }

    @Transactional
    public Admin loadCurrentTeacher() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.findByName(name).orElseThrow(UserssNotFoundException::new);
    }

}
